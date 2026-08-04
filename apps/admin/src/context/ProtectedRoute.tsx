"use client";
import { useEffect } from "react";
import { useAuth } from "./AuthContext";
import { useRouter, usePathname } from "next/navigation";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading && !user && pathname !== "/login") {
      router.push("/login");
    }
  }, [user, isLoading, router, pathname]);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  // If on login page, or if authenticated
  if (pathname === "/login" || user) {
    return <>{children}</>;
  }

  return null;
}
