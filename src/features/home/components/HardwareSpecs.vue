<script setup>
const specs = [
  { 
    id: '01', type: 'PROCESSING', title: 'EPYC 7763', subtitle: '64 CORES / 128 THREADS', 
    barWidth: 'w-3/4', stat1: 'CLOCK: 3.5GHZ', stat2: 'LOAD: 12%' 
  },
  { 
    id: '02', type: 'VOLATILE_STORAGE', title: '64GB DDR5', subtitle: 'ECC REGISTERED RAM', 
    barWidth: 'w-1/4', stat1: 'USED: 16.2GB', stat2: 'FREE: 47.8GB' 
  },
  { 
    id: '03', type: 'PERSISTENT_DATA', title: '2x 2TB NVME', subtitle: 'RAID-1 MIRROR CONFIG', 
    barWidth: 'w-2/3', stat1: 'HEALTH: OPTIMAL', stat2: 'IOPS: 450K' 
  }
]
</script>

<template>
  <section class="py-24 px-6 md:px-12 bg-surface-container-lowest">
    <div class="max-w-7xl mx-auto">
      
      <div class="flex items-end justify-between mb-12">
        <div>
          <div class="text-primary font-mono text-xs mb-2">SYSTEM_ARCHITECTURE</div>
          <h2 class="text-5xl font-black tracking-tighter">HARDWARE SPECIFICATIONS</h2>
        </div>
        <div class="font-mono text-[10px] text-outline-variant text-right hidden md:block">
          BUILD: CRIMSON_01<br/>SERIAL: 9942-PX-DRIVE
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-1">
        <div v-for="spec in specs" :key="spec.id" class="bg-surface-container p-8 border-2 border-outline-variant relative group hover:border-primary transition-colors">
          <div class="absolute top-0 right-0 w-4 h-4 bg-primary"></div>
          <div class="text-outline-variant font-mono text-[10px] mb-4">{{ spec.id }} // {{ spec.type }}</div>
          <div class="text-3xl font-black text-on-surface mb-2">{{ spec.title }}</div>
          <div class="text-primary font-mono text-sm tracking-widest">{{ spec.subtitle }}</div>
          <div class="mt-8 space-y-2">
            <div class="w-full h-1 bg-surface-container-high overflow-hidden">
              <div :class="['h-full bg-primary', spec.barWidth]"></div>
            </div>
            <div class="flex justify-between font-mono text-[10px]">
              <span>{{ spec.stat1 }}</span>
              <span>{{ spec.stat2 }}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>