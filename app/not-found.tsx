import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-gray-500 mt-4">
        Page not found
      </p>

      <Link href="/"><Button
            variant="secondary"
            className="border rounded-md py-4 px-6 text-md font-semibold mt-4"
          >
            Go Home
          </Button></Link>
    </div>
  );
}