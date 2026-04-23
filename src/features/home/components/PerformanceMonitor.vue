<script setup>
// Simulamos las barras del gráfico (true = rojo/uplink, false = gris/downlink)
const chartBars = [
  { up: false, h: 'h-1/2' }, { up: false, h: 'h-2/3' }, { up: true, h: 'h-1/3' }, 
  { up: true, h: 'h-1/2' }, { up: false, h: 'h-4/5' }, { up: true, h: 'h-2/3' }, 
  { up: true, h: 'h-3/4' }, { up: false, h: 'h-1/2' }, { up: false, h: 'h-2/3' }, 
  { up: true, h: 'h-1/2' }, { up: true, h: 'h-full' }, { up: false, h: 'h-3/4' }
]
</script>

<template>
  <section class="py-24 px-6 md:px-12 bg-surface">
    <div class="max-w-7xl mx-auto border-4 border-outline-variant p-8 relative">
      <div class="absolute -top-3 px-4 bg-surface left-8 font-mono text-xs text-primary">REAL-TIME_MONITOR</div>
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div class="lg:col-span-8">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-2xl font-bold tracking-tight font-mono">NET_TRAFFIC_THROUGHPUT</h3>
            <div class="flex gap-4">
              <div class="flex items-center gap-2"><div class="w-2 h-2 bg-primary"></div><span class="font-mono text-[10px]">UPLINK</span></div>
              <div class="flex items-center gap-2"><div class="w-2 h-2 bg-on-secondary-container"></div><span class="font-mono text-[10px]">DOWNLINK</span></div>
            </div>
          </div>
          
          <div class="h-64 border-l-2 border-b-2 border-outline-variant flex items-end gap-1 p-2 bg-surface-container-low">
            <div v-for="(bar, i) in chartBars" :key="i" 
                 :class="['w-full border-t-2', bar.h, bar.up ? 'bg-primary/40 border-primary' : 'bg-on-secondary-container/20 border-on-secondary-container']">
            </div>
          </div>
        </div>

        <div class="lg:col-span-4 flex flex-col gap-4">
          <div class="bg-surface-container-high p-6 flex-1">
            <div class="text-outline font-mono text-[10px] mb-2 uppercase">Current Uptime</div>
            <div class="text-4xl font-black text-primary">99.999%</div>
            <div class="text-xs font-mono text-outline-variant mt-2">SLA_TARGET: EXCEEDED</div>
          </div>
          <div class="bg-surface-container-high p-6 flex-1">
            <div class="text-outline font-mono text-[10px] mb-2 uppercase">Response Time</div>
            <div class="text-4xl font-black text-on-surface">14ms</div>
            <div class="text-xs font-mono text-outline-variant mt-2">LOC: FRANKFURT_NODE_09</div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>