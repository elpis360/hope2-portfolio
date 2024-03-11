export const COOKIES = {
  auth: "___xx__hope_auth_0108390cxdf",
  expiry_time: "___xx__hope_user_02839jd8123",
  options: {
    sameSite: "lax",
    maxAge: 60 * 30, //thirty minutes
    path: "/",
    secure: process.env.NODE_ENV === "production",
  },
} as const;
