<script setup>
// 1. Importamos los archivos físicos de la carpeta assets
import debianIcon from '@/assets/icons/debian.svg'
import archIcon from '@/assets/icons/archlinux.svg'
import ubuntuIcon from '@/assets/icons/ubuntu.svg'
import dockerIcon from '@/assets/icons/docker.svg'
import nginxIcon from '@/assets/icons/nginx.svg'
import encryption from '@/assets/icons/letsencrypt.svg'

// 2. Usamos esas variables importadas en nuestro arreglo
const items = [
  {type: 'dot'},
  { type: 'tech', label: 'SEC_ENCRYPTION: AES-256', image: encryption },
  { type: 'dot' },
  { type: 'tech', label: 'DEBIAN_X86', image: debianIcon },
  { type: 'dot' },
  { type: 'tech', label: 'ARCH_CORE', image: archIcon },
  { type: 'dot' },
  { type: 'tech', label: 'UBUNTU_LTE', image: ubuntuIcon },
  { type: 'dot' },
  { type: 'tech', label: 'DOCKER_ENGINE', image: dockerIcon },
  { type: 'dot' },
  { type: 'tech', label: 'NGINX_PROXY', image: nginxIcon },
]
</script>

<template>
  <section class="bg-surface-container py-8 border-y-2 border-outline-variant overflow-hidden">
    <div class="flex whitespace-nowrap w-max animate-marquee items-center">
      
      <div v-for="n in 2" :key="n" class="flex items-center gap-12 shrink-0 px-6">
        
        <template v-for="(item, index) in items" :key="`${n}-${index}`">
          
          <span v-if="item.type === 'text'" class="font-mono text-xs tracking-[0.3em] text-outline">
            {{ item.value }}
          </span>

          <span v-else-if="item.type === 'dot'" class="w-2 h-2 bg-primary"></span>

          <div v-else-if="item.type === 'tech'" class="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <img :src="item.image" :alt="item.label" class="w-6 h-6 object-contain" />
            <span class="font-mono text-xs tracking-[0.3em] text-on-surface">{{ item.label }}</span>
          </div>

        </template>
        
      </div>
      
    </div>
  </section>
</template>