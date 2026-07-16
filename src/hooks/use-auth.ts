export function useAuth() {
  return {
    isLoading: false,
    isAuthenticated: false,
    user: null,
    signIn: async () => {
      console.warn("Authentication is not configured.");
    },
    signOut: async () => {
      console.warn("Authentication is not configured.");
    },
  };
}
