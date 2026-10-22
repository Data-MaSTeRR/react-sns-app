import { useMutation } from "@tanstack/react-query";
import { signInWithPassword } from "@/api/auth.ts";
import type { UseMutationCallback } from "@/types.ts";

export function useSignInWithPassword(callbacks?: UseMutationCallback) {
  return useMutation({
    mutationFn: signInWithPassword,
    onError: (error) => {
      console.error(error);

      // 인자에 콜백함수 중 onError가 있으면, callback 함수의 onError를 실행
      if (callbacks?.onError) {
        callbacks.onError(error);
      }
    },
  });
}
