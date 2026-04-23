<script setup>

import TechMarquee from '../../../components/TechMarquee.vue';

</script>

<template>
  <main>
    <section class="relative min-h-[819px] flex flex-col items-center justify-center px-6 md:px-12 py-20 gap-12 overflow-hidden pixel-grid text-center">
      
      <div class="w-full max-w-4xl z-10 flex flex-col items-center">
        
        <div class="inline-block bg-primary-container text-on-primary-container px-3 py-1 font-mono text-[10px] tracking-[0.2em] mb-6">
          CRIMSON_PROTOCOL_ACTIVE
        </div>
        
        <h1 class="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8 typewriter-text w-fit mx-auto">
          SILENT. <span class="text-primary">SECURE.</span> SUPREME.
        </h1>
        
        <p class="text-xl md:text-2xl font-light text-outline max-w-2xl mb-10 leading-relaxed mx-auto">
          The ultimate perimeter for your digital assets. No logs, no leaks, no compromises. Built on fortified architecture and encrypted with 256-bit military-grade precision.
        </p>
        
        <div class="flex flex-wrap justify-center gap-4">
          <button class="bg-primary-container text-on-primary-container px-8 py-4 font-mono font-bold text-sm tracking-widest flicker-hover">
            INITIALIZE_DRIVE
          </button>
          <button class="border-2 border-outline text-on-surface px-8 py-4 font-mono font-bold text-sm tracking-widest hover:bg-surface-container transition-colors">
            READ_MANIFESTO
          </button>
        </div>

      </div>
    </section>

    <TechMarquee />

  </main>
</template>