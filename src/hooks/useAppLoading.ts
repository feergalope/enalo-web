// Hook simplificado sin timeouts artificiales
// El contenido es estático y puede renderizarse inmediatamente
export const useAppLoading = () => {
  // No hay carga asíncrona real, todo es estático
  return { isLoading: false };
};
