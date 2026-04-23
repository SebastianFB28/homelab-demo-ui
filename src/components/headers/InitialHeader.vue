<script setup>
// Aquí más adelante pondremos la lógica para abrir/cerrar menú si es necesario
</script>

<template>
  <header class="bg-[#0e0e0e] flex justify-between items-center w-full px-6 py-4 max-w-none sticky top-0 z-50 border-b-2 border-[#b18780]">
    <div class="text-3xl font-black tracking-tighter text-primary font-headline">Homelab server</div>
    
    <nav class="hidden md:flex items-center gap-8">
      <a class="text-primary border-b-2 border-primary pb-1 font-mono uppercase tracking-widest text-[10px] hover:bg-primary hover:text-[#0e0e0e] transition-colors duration-75" href="#">ARCHIVE</a>
      <a class="text-outline font-mono uppercase tracking-widest text-[10px] hover:bg-primary hover:text-[#0e0e0e] transition-colors duration-75" href="#">ENCRYPTION</a>
      <a class="text-outline font-mono uppercase tracking-widest text-[10px] hover:bg-primary hover:text-[#0e0e0e] transition-colors duration-75" href="#">TERMINAL</a>
    </nav>
    
    <button class="bg-primary-container text-on-primary-container px-6 py-2 font-mono font-bold uppercase tracking-widest text-xs hover:bg-primary transition-colors duration-75">
      LOGIN
    </button>
  </header>
</template>