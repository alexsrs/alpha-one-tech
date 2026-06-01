import React from "react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  onAction?: () => void;
}

export default function ServiceCard({
  title,
  description,
  image,
  icon,
  onAction,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden",
        "transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Icon badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg">
          {icon}
        </div>

        {/* Title overlay on image */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-bold text-lg leading-tight drop-shadow-md">
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-5">
          {description}
        </p>

        {/* Action Button */}
        <button
          onClick={onAction}
          className={cn(
            "w-full py-3 px-5 rounded-lg font-semibold text-sm transition-all duration-200",
            "bg-[#0036b2] text-white hover:bg-[#002a8a] hover:shadow-lg",
            "active:scale-[0.98] cursor-pointer"
          )}
        >
          Saiba mais
        </button>
      </div>
    </div>
  );
}
