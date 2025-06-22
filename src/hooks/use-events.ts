import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase, handleSupabaseError, getAuthenticatedUser } from '@/lib/supabase';
import { 
  mockEvents, 
  mockEventParticipants, 
  mockEventLeaderboards,
  getEventById,
  getActiveEvents,
  getFeaturedEvents,
  getEventLeaderboard,
  getUserEventParticipation,
  USE_MOCK_DATA 
} from '@/data/mock-events';
import { useUIStore } from '@/store/ui-store';
import type { Event, EventParticipant, EventLeaderboard } from '@/types';

export const useEvents = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: async (): Promise<Event[]> => {
      if (USE_MOCK_DATA) {
        // Simulate network delay for realistic development experience
        await new Promise(resolve => setTimeout(resolve, 500));
        return mockEvents;
      }

      const { data, error } = await supabase
        .from('events')
        .select(`
          *,
          organizer:profiles!organizer_id(*)
        `)
        .eq('is_active', true)
        .order('start_date', { ascending: true });

      if (error) throw new Error(handleSupabaseError(error));
      return data || [];
    },
  });
};

export const useActiveEvents = () => {
  return useQuery({
    queryKey: ['events', 'active'],
    queryFn: async (): Promise<Event[]> => {
      if (USE_MOCK_DATA) {
        await new Promise(resolve => setTimeout(resolve, 300));
        return getActiveEvents();
      }

      const { data, error } = await supabase
        .from('events')
        .select(`
          *,
          organizer:profiles!organizer_id(*)
        `)
        .eq('is_active', true)
        .gte('end_date', new Date().toISOString())
        .order('start_date', { ascending: true });

      if (error) throw new Error(handleSupabaseError(error));
      return data || [];
    },
  });
};

export const useFeaturedEvents = () => {
  return useQuery({
    queryKey: ['events', 'featured'],
    queryFn: async (): Promise<Event[]> => {
      if (USE_MOCK_DATA) {
        await new Promise(resolve => setTimeout(resolve, 200));
        return getFeaturedEvents();
      }

      const { data, error } = await supabase
        .from('events')
        .select(`
          *,
          organizer:profiles!organizer_id(*)
        `)
        .eq('is_active', true)
        .eq('is_featured', true)
        .gte('end_date', new Date().toISOString())
        .order('start_date', { ascending: true })
        .limit(3);

      if (error) throw new Error(handleSupabaseError(error));
      return data || [];
    },
  });
};

export const useEvent = (id: string) => {
  return useQuery({
    queryKey: ['event', id],
    queryFn: async (): Promise<Event | null> => {
      if (USE_MOCK_DATA) {
        await new Promise(resolve => setTimeout(resolve, 300));
        return getEventById(id) || null;
      }

      const { data, error } = await supabase
        .from('events')
        .select(`
          *,
          organizer:profiles!organizer_id(*)
        `)
        .eq('id', id)
        .single();

      if (error) throw new Error(handleSupabaseError(error));
      return data;
    },
    enabled: !!id,
  });
};

export const useEventParticipation = (eventId: string) => {
  return useQuery({
    queryKey: ['event-participation', eventId],
    queryFn: async (): Promise<EventParticipant | null> => {
      if (USE_MOCK_DATA) {
        await new Promise(resolve => setTimeout(resolve, 200));
        // Return mock participation for user-1
        return mockEventParticipants.find(
          p => p.event_id === eventId && p.user_id === 'user-1'
        ) || null;
      }

      const user = await getAuthenticatedUser();
      
      const { data, error } = await supabase
        .from('event_participants')
        .select('*')
        .eq('event_id', eventId)
        .eq('user_id', user.id)
        .maybeSingle();

      if (error) throw new Error(handleSupabaseError(error));
      return data;
    },
    enabled: !!eventId,
  });
};

export const useEventLeaderboard = (eventId: string) => {
  return useQuery({
    queryKey: ['event-leaderboard', eventId],
    queryFn: async (): Promise<EventLeaderboard | null> => {
      if (USE_MOCK_DATA) {
        await new Promise(resolve => setTimeout(resolve, 400));
        return getEventLeaderboard(eventId) || null;
      }

      const { data, error } = await supabase
        .from('event_participants')
        .select(`
          *,
          user:profiles!user_id(*)
        `)
        .eq('event_id', eventId)
        .order('current_score', { ascending: false })
        .order('completion_time', { ascending: true });

      if (error) throw new Error(handleSupabaseError(error));
      
      return {
        event_id: eventId,
        participants: data || [],
        last_updated: new Date().toISOString(),
      };
    },
    enabled: !!eventId,
  });
};

export const useUserEventParticipations = () => {
  return useQuery({
    queryKey: ['user-event-participations'],
    queryFn: async (): Promise<EventParticipant[]> => {
      if (USE_MOCK_DATA) {
        await new Promise(resolve => setTimeout(resolve, 300));
        return getUserEventParticipation('user-1');
      }

      const user = await getAuthenticatedUser();
      
      const { data, error } = await supabase
        .from('event_participants')
        .select(`
          *,
          event:events(*)
        `)
        .eq('user_id', user.id)
        .order('registered_at', { ascending: false });

      if (error) throw new Error(handleSupabaseError(error));
      return data || [];
    },
  });
};

export const useJoinEvent = () => {
  const queryClient = useQueryClient();
  const { addNotification } = useUIStore();

  return useMutation({
    mutationFn: async (eventId: string) => {
      if (USE_MOCK_DATA) {
        // Simulate joining event in mock mode
        await new Promise(resolve => setTimeout(resolve, 1000));
        return {
          id: 'new-participation',
          event_id: eventId,
          user_id: 'user-1',
          registered_at: new Date().toISOString(),
          status: 'registered' as const,
          current_score: 0,
          current_rank: 0,
        };
      }

      const user = await getAuthenticatedUser();
      
      const { data, error } = await supabase
        .from('event_participants')
        .insert({
          event_id: eventId,
          user_id: user.id,
          status: 'registered',
          current_score: 0,
          current_rank: 0,
        })
        .select()
        .single();

      if (error) throw new Error(handleSupabaseError(error));
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['event-participation'] });
      queryClient.invalidateQueries({ queryKey: ['user-event-participations'] });
      addNotification({
        type: 'success',
        title: 'Successfully Registered!',
        message: 'You have been registered for the event. Good luck!',
      });
    },
    onError: (error: Error) => {
      addNotification({
        type: 'error',
        title: 'Registration Failed',
        message: error.message,
      });
    },
  });
};