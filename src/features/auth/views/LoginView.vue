<script setup>
// Aquí podrías agregar lógica reactiva después
</script>

<template>
  <div class="min-h-screen flex flex-col relative overflow-x-hidden bg-background">
    <div class="scanline pointer-events-none z-[60]"></div>

    <main class="flex-grow flex items-center justify-center p-8 bg-surface-container-lowest relative overflow-hidden">
      <div class="absolute inset-0 dither-bg opacity-5 pointer-events-none"></div>
      
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[600px] pointer-events-none opacity-20 hidden md:block">
        <div class="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-primary"></div>
        <div class="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-primary"></div>
        <div class="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-primary"></div>
        <div class="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-primary"></div>
      </div>

      <div class="w-full max-w-md z-10 mx-auto">
        <div class="mb-12">
          <div class="flex items-center gap-2 mb-2">
            <span class="w-3 h-3 bg-primary"></span>
            <h1 class="text-xs font-mono tracking-[0.3em] text-primary">SECURE_ACCESS_REQUIRED</h1>
          </div>
          <h2 class="text-4xl font-black text-on-surface tracking-tighter uppercase leading-none">SYSTEM_ENTRY</h2>
        </div>

        <form @submit.prevent class="space-y-10">
          <div class="space-y-1">
            <label class="block text-[10px] font-mono uppercase tracking-widest text-outline mb-2">ACCESS_KEY // USER_ID</label>
            <div class="relative group">
              <input 
                type="text" 
                class="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-primary font-mono placeholder:text-zinc-800 transition-all py-3" 
                placeholder="ID_STATION_ALPHA"
              />
              <div class="absolute bottom-0 left-0 h-0.5 bg-primary w-0 group-focus-within:w-full transition-all duration-300"></div>
            </div>
          </div>

          <div class="space-y-1">
            <label class="block text-[10px] font-mono uppercase tracking-widest text-outline mb-2">ENCRYPTION_PHRASE // PASSWORD</label>
            <div class="relative group">
              <input 
                type="password" 
                class="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-primary font-mono placeholder:text-zinc-800 transition-all py-3" 
                placeholder="••••••••••••"
              />
              <div class="absolute bottom-0 left-0 h-0.5 bg-primary w-0 group-focus-within:w-full transition-all duration-300"></div>
            </div>
          </div>

          <div class="flex flex-col gap-6 pt-4">
            <button class="bg-primary-container text-on-primary-container px-8 py-4 font-mono font-bold tracking-tighter hover:bg-inverse-primary transition-all active:ring-4 active:ring-black/20 group relative overflow-hidden">
              <span class="relative z-10 flex items-center justify-center gap-2">
                INITIALIZE AUTHENTICATION
                <span class="material-symbols-outlined text-sm">bolt</span>
              </span>
            </button>
            <div class="flex justify-between items-center text-[10px] font-mono text-zinc-600">
              <a class="hover:text-primary transition-colors" href="#">FORGOT_KEY?</a>
              <a class="hover:text-primary transition-colors" href="#">REQUEST_PROX_ACCESS</a>
            </div>
          </div>
        </form>

        <div class="mt-16 border-l-2 border-red-900/30 pl-4 py-2">
          <div class="flex items-center gap-2 mb-2">
            <div class="w-1 h-4 bg-red-900/40"></div>
            <span class="text-[8px] font-mono text-red-500/60 uppercase tracking-widest">PROTOCOL: CRIMSON_KERNEL_V4</span>
          </div>
          <p class="text-[9px] font-mono text-zinc-700 leading-relaxed uppercase">
            Warning: This system is private property. Unauthorized access attempts are monitored and will be traced via the Crimson Protocol kernel. Encryption Level: 4096-BIT_ELIPTIC.
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Aquí movemos los estilos específicos que venían en el <style> del HTML */
.dither-bg {
  background-image: radial-gradient(#ff5540 0.5px, transparent 0.5px);
  background-size: 4px 4px;
}

.scanline {
  width: 100%;
  height: 2px;
  background: rgba(255, 85, 64, 0.1);
  position: absolute;
  animation: scanline 6s linear infinite;
}

@keyframes scanline {
  0% { top: 0%; }
  100% { top: 100%; }
}
</style>