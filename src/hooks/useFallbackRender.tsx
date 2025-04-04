

import { Button } from "@/components/ui/button"
import { errorHandler } from "@/utils/error-handler";

export function useFallbackRender() {
  function fallbackRender({ error, resetErrorBoundary }:{error:any, resetErrorBoundary:()=>any}) {
    return (
      <div
        role="alert"
        className="flex flex-col items-center h-[100vh] justify-center"
      >
        <p className="text-primary text-center text-lg">
          Something went wrong:
        </p>
        <pre className="text-error text-center text-lg mb-2">
          {/Loading chunk [\d]+ failed/.test(errorHandler(error))
            ? 'Please check your internet connection and try again!'
            : errorHandler(error)}
        </pre>
        <Button
          title='Go Back'
          onClick={() => {
            resetErrorBoundary();
            if (/Loading chunk [\d]+ failed/.test(errorHandler(error))) {
              window.location.reload();
            }
          }}
        />
      </div>
    );
  }
  return {
    fallbackRender,
  };
}
