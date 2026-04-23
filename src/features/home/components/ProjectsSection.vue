<script setup>
const projects = [
  { icon: 'cloud_upload', title: 'Cloud Backup System', desc: 'Automated, differential backup clusters with triple-point redundancy across regional zones.', tags: ['AUTO_SYNC', 'E2E_ENCRYPT'] },
  { icon: 'neurology', title: 'Neural Network Training', desc: 'Optimized compute pipelines for large language models and computer vision dataset processing.', tags: ['GPU_CLUSTER', 'LOW_LATENCY'] },
  { icon: 'encrypted', title: 'Encrypted Archive', desc: 'Long-term cold storage solution for sensitive legal and financial documentation.', tags: ['COLD_STORAGE', 'WORM_ACCESS'] }
]
</script>

<template>
  <section class="py-24 px-6 md:px-12 bg-surface-container-lowest">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-black tracking-tighter mb-4 italic underline decoration-primary decoration-4 underline-offset-8">DEPLOYED_SOLUTIONS</h2>
        <p class="font-mono text-xs tracking-widest text-outline">SCALABLE ARCHITECTURE FOR THE MODERN TERMINAL</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(project, i) in projects" :key="i" class="bg-surface-container border-2 border-outline-variant p-6 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(255,180,168,0.2)] transition-all cursor-pointer">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 bg-primary flex items-center justify-center">
              <span class="material-symbols-outlined text-on-primary-container">{{ project.icon }}</span>
            </div>
            <h4 class="font-bold text-lg tracking-tight uppercase">{{ project.title }}</h4>
          </div>
          <p class="text-sm text-outline leading-relaxed mb-6 font-medium">{{ project.desc }}</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in project.tags" :key="tag" class="px-2 py-1 bg-surface-container-high text-[9px] font-mono border border-outline-variant">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>