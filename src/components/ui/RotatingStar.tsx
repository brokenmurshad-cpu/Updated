import { cn } from "@/lib/utils";

export default function RotatingStar({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 animate-spin items-center justify-center font-sans leading-none [animation-duration:8s] motion-reduce:animate-none",
        className,
      )}
    >
      ✱
    </span>
  );
}
