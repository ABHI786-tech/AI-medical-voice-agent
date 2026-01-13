"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Next-Generation Healthcare Starts with AI Voice Agents.`;

export function TextGenerate() {
  return <TextGenerateEffect words={words} />;
}
