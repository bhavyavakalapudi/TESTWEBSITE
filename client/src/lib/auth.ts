export interface AuthToken {
  token: string;
  user: {
    id: number;
    email: string;
  };
}

export const AUTH_TOKEN_KEY = "auth_token";
export const HARDCODED_EMAIL = "admin@test.com";
export const HARDCODED_PASSWORD = "password123";

export function getAuthToken(): string | null {
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

export function setAuthToken(token: string): void {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
}

export function removeAuthToken(): void {
  localStorage.removeItem(AUTH_TOKEN_KEY);
}

export function isAuthenticated(): boolean {
  return !!getAuthToken();
}

// Simulate login without backend
export function simulateLogin(email: string, password: string): Promise<{ success: boolean; token?: string; message?: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === HARDCODED_EMAIL && password === HARDCODED_PASSWORD) {
        const mockToken = `mock-jwt-token-${Date.now()}`;
        resolve({ success: true, token: mockToken });
      } else {
        resolve({ success: false, message: "Invalid email or password" });
      }
    }, 500); // Simulate network delay
  });
}

// Simulate batch start without backend
export function simulateStartBatch(data: any): Promise<{ success: boolean; message?: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Validate the data
      if (!data.oldPatientsTarget && data.oldPatientsTarget !== 0) {
        resolve({ success: false, message: "Old patients target is required" });
        return;
      }
      if (!data.importSetupId || data.importSetupId <= 0) {
        resolve({ success: false, message: "Import Setup ID must be a positive integer greater than 0" });
        return;
      }
      if (!data.hourlyBatchCount || data.hourlyBatchCount < 1 || data.hourlyBatchCount > 100) {
        resolve({ success: false, message: "Hourly batch count must be between 1 and 100" });
        return;
      }
      
      resolve({ success: true, message: "Batch started successfully!" });
    }, 800); // Simulate processing time
  });
}
