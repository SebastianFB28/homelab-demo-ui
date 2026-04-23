<script setup>
// En el futuro aquí manejaremos el v-model de los inputs
</script>

<template>
  <main class="min-h-screen pt-24 pb-32 px-4 md:px-12 flex flex-col items-center relative overflow-hidden bg-surface-container-lowest">
    <div class="absolute inset-0 dither-bg pointer-events-none"></div>

    <div class="w-full max-w-6xl mb-12 relative z-10">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-l-8 border-primary pl-6">
        <div>
          <p class="font-mono text-primary text-xs tracking-widest mb-2 uppercase">SYSTEM_ACCESS_REQUESTED</p>
          <h1 class="text-5xl md:text-8xl font-black text-on-surface uppercase tracking-tighter font-headline leading-none">
            NEW_IDENTITY<br /><span class="text-primary">_PROTOCOL</span>
          </h1>
        </div>
        <div class="hidden md:block text-right">
          <p class="font-mono text-[10px] text-outline opacity-50 uppercase">ENCRYPTION_LAYER: 512-BIT_AES</p>
          <p class="font-mono text-[10px] text-outline opacity-50 uppercase">STATUS: AWAITING_INPUT</p>
        </div>
      </div>
    </div>

    <div class="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
      <div class="lg:col-span-8 bg-surface-container border-4 border-outline-variant p-8 relative">
        <div class="absolute top-0 right-0 w-4 h-4 bg-primary"></div>
        
        <form @submit.prevent class="space-y-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-2">
              <label class="block font-mono text-[10px] text-primary font-bold uppercase tracking-widest">01_Alias (Username)</label>
              <input class="w-full bg-transparent border-b-2 border-primary focus:ring-0 focus:border-on-primary-container font-mono text-on-surface placeholder:text-outline/30 px-0 py-2 transition-all" placeholder="ENTITY_DESIGNATOR" type="text"/>
            </div>
            <div class="space-y-2">
              <label class="block font-mono text-[10px] text-primary font-bold uppercase tracking-widest">02_Secure_Email</label>
              <input class="w-full bg-transparent border-b-2 border-primary focus:ring-0 focus:border-on-primary-container font-mono text-on-surface placeholder:text-outline/30 px-0 py-2 transition-all" placeholder="COMMS_CHANNEL@ENCRYPTED.NET" type="email"/>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-2">
              <label class="block font-mono text-[10px] text-primary font-bold uppercase tracking-widest">03_Master_Key (Password)</label>
              <input class="w-full bg-transparent border-b-2 border-primary focus:ring-0 focus:border-on-primary-container font-mono text-on-surface placeholder:text-outline/30 px-0 py-2 transition-all" placeholder="••••••••••••••••" type="password"/>
            </div>
            <div class="space-y-2">
              <label class="block font-mono text-[10px] text-primary font-bold uppercase tracking-widest">04_Confirm_Master_Key</label>
              <input class="w-full bg-transparent border-b-2 border-primary focus:ring-0 focus:border-on-primary-container font-mono text-on-surface placeholder:text-outline/30 px-0 py-2 transition-all" placeholder="••••••••••••••••" type="password"/>
            </div>
          </div>

          <div class="space-y-4 pt-4 border-t border-outline-variant/30">
            <label class="flex items-start gap-4 cursor-pointer group">
              <input class="w-5 h-5 bg-surface-container-highest border-2 border-primary text-primary focus:ring-0 rounded-none cursor-pointer mt-1" type="checkbox"/>
              <div class="flex flex-col">
                <span class="font-mono text-xs text-on-surface group-hover:text-primary transition-colors uppercase">Zero-Knowledge Protocol Agreement</span>
                <span class="font-mono text-[10px] text-outline opacity-70">DATA REMAINS ENCRYPTED CLIENT-SIDE. WE NEVER STORE KEYS.</span>
              </div>
            </label>
            <label class="flex items-start gap-4 cursor-pointer group">
              <input class="w-5 h-5 bg-surface-container-highest border-2 border-primary text-primary focus:ring-0 rounded-none cursor-pointer mt-1" type="checkbox"/>
              <div class="flex flex-col">
                <span class="font-mono text-xs text-on-surface group-hover:text-primary transition-colors uppercase">Biometric Sync</span>
                <span class="font-mono text-[10px] text-outline opacity-70">LINK HARDWARE KEY AND BIOMETRIC SENSORS FOR MULTI-FACTOR.</span>
              </div>
            </label>
          </div>

          <div class="pt-8">
            <button class="group relative w-full bg-primary-container text-on-primary-container font-black py-6 text-2xl font-headline tracking-tighter uppercase transition-all hover:bg-inverse-primary active:ring-4 active:ring-black active:ring-inset">
              ENROLL_UNIT
              <div class="absolute top-2 right-2 flex gap-1 opacity-50 group-hover:opacity-100">
                <span class="material-symbols-outlined text-sm">chevron_right</span>
                <span class="material-symbols-outlined text-sm">chevron_right</span>
              </div>
            </button>
            <p class="text-center font-mono text-[10px] text-outline mt-4 opacity-50">WARNING: UNRECOVERABLE IF MASTER KEY IS LOST</p>
          </div>
        </form>
      </div>

      <div class="lg:col-span-4 space-y-6">
        <div class="bg-surface-container-high border-2 border-[#5c0000] p-6 relative">
          <div class="flex items-center gap-2 mb-4">
            <span class="material-symbols-outlined text-primary text-sm">verified_user</span>
            <h3 class="font-mono text-xs font-black text-primary tracking-widest uppercase">Identity Requirements</h3>
          </div>
          <ul class="space-y-4 font-mono text-[10px] text-on-surface-variant">
            <li class="flex items-start gap-3"><span class="text-primary font-bold">[!]</span><span>MINIMUM 16 CHARACTERS FOR MASTER_KEY ENTROPY.</span></li>
            <li class="flex items-start gap-3"><span class="text-primary font-bold">[!]</span><span>MUST CONTAIN NON-ALPHANUMERIC SYMBOLS.</span></li>
            <li class="flex items-start gap-3"><span class="text-primary font-bold">[!]</span><span>ALIAS MUST BE UNIQUE IN REGISTRY.</span></li>
          </ul>
        </div>
        
        <div class="border-2 border-outline-variant/20 p-4 opacity-30 grayscale hover:grayscale-0 transition-all cursor-crosshair">
          <div class="w-full h-32 bg-zinc-900 border border-primary/20 mb-4 flex items-center justify-center">
             <span class="material-symbols-outlined text-primary/20 text-4xl">Memory</span>
          </div>
          <p class="font-mono text-[9px] leading-tight text-outline">HARDWARE_LOCK_ID: 99x-AF-001<br/>SIGNAL_STRENGTH: OPTIMAL</p>
        </div>
      </div>
    </div>
  </main>
</template>