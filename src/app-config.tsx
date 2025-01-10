export const appConfig: {
  mode: "comingSoon" | "maintenance" | "live";
} = {
  mode: "live", // "live",
};

export const protectedRoutes = ["/purchases", "/dashboard"];
export const applicationName = "Placeholder";
export const companyName = "Lorem, LLC";
export const afterLoginUrl = "/dashboard";

export const MAX_UPLOAD_IMAGE_SIZE_IN_MB = 5;
export const MAX_UPLOAD_IMAGE_SIZE = 1024 * 1024 * MAX_UPLOAD_IMAGE_SIZE_IN_MB;
