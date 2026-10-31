import { Link } from "@tanstack/react-router";
import { Sun } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 font-bold ${className}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-solar shadow-soft">
        <Sun className="h-5 w-5 text-solar-foreground" />
      </span>
      <span className="text-lg leading-none tracking-tight">
        EDR <span className="text-primary">Aquecedores</span>
      </span>
    </Link>
  );
}
