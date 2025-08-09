(() => {
  const state = { ctx:null, canvas:null, stars:[], mouse:{x:0,y:0, active:false}, raf:0, reduce:false };
  const cfg = { max:96, dist:110, speed:0.22, glow:4 };

  function init(){
    state.canvas = document.getElementById('bg');
    if(!state.canvas) return;
    state.reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    state.ctx = state.canvas.getContext('2d');
    onResize();
    spawn();
    if(!state.reduce){ addEvents(); loop(); }
    const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();
    injectPersonSchema();
    injectExperience();
  }

  function onResize(){
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    state.canvas.width = innerWidth * dpr; state.canvas.height = innerHeight * dpr; state.ctx.setTransform(dpr,0,0,dpr,0,0);
  }

  function spawn(){
    const count = innerWidth >= 1280 ? cfg.max : innerWidth >= 768 ? Math.floor(cfg.max*0.55) : Math.floor(cfg.max*0.3);
    state.stars = Array.from({length:count}, () => ({ x: Math.random()*innerWidth, y: Math.random()*innerHeight, vx:(Math.random()-.5)*cfg.speed, vy:(Math.random()-.5)*cfg.speed }));
  }

  function draw(){
    const {ctx} = state; ctx.clearRect(0,0,innerWidth,innerHeight);
    // edges
    ctx.globalAlpha = 0.2; ctx.lineWidth = 1; ctx.beginPath();
    for(let i=0;i<state.stars.length;i++){
      for(let j=i+1;j<state.stars.length;j++){
        const a = state.stars[i], b = state.stars[j];
        const dx=a.x-b.x, dy=a.y-b.y; const d = Math.hypot(dx,dy);
        if(d < cfg.dist){ ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); }
      }
    }
    ctx.strokeStyle = 'rgba(255,255,255,0.18)'; ctx.stroke();
    // stars
    ctx.globalAlpha = 1; for(const s of state.stars){
      ctx.beginPath(); ctx.arc(s.x, s.y, 1.2, 0, Math.PI*2);
      ctx.shadowBlur = cfg.glow; ctx.shadowColor = 'rgba(255,255,255,0.6)'; ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.fill(); ctx.shadowBlur = 0;
    }
  }

  function step(){
    const {mouse} = state;
    for(const s of state.stars){
      if(mouse.active){ s.vx += (mouse.x - s.x)*0.00003; s.vy += (mouse.y - s.y)*0.00003; }
      s.x += s.vx; s.y += s.vy;
      if(s.x < -10) s.x = innerWidth+10; if(s.x > innerWidth+10) s.x = -10;
      if(s.y < -10) s.y = innerHeight+10; if(s.y > innerHeight+10) s.y = -10;
      s.vx *= 0.999; s.vy *= 0.999;
    }
  }

  const loop = () => { step(); draw(); state.raf = requestAnimationFrame(loop); };

  function addEvents(){
    const onMove = (e) => { state.mouse.x = e.clientX; state.mouse.y = e.clientY; };
    const onEnter = () => (state.mouse.active = true);
    const onLeave = () => (state.mouse.active = false);
    window.addEventListener('pointermove', onMove, {passive:true});
    window.addEventListener('pointerdown', onEnter, {passive:true});
    window.addEventListener('pointerup', onLeave, {passive:true});
    window.addEventListener('blur', () => cancelAnimationFrame(state.raf));
    window.addEventListener('focus', () => state.raf = requestAnimationFrame(loop));
    window.addEventListener('resize', debounce(() => { onResize(); spawn(); }, 200));
  }

  function debounce(fn, wait){ let t; return (...args) => { clearTimeout(t); t = setTimeout(() => fn.apply(null,args), wait); } }

  function injectPersonSchema(){
    const el = document.getElementById('person-schema'); if(!el) return;
    el.textContent = JSON.stringify({
      "@context":"https://schema.org","@type":"Person",
      name:"Lê Hiếu", jobTitle:"Senior DevOps",
      sameAs:["https://github.com/googlesky", "https://www.linkedin.com/in/googlesky/"],
      email:"mailto:HIEULP@1DEVOPS.IO",
      telephone:"+84-975-669-775",
      address:{
        "@type":"PostalAddress", addressLocality:"Thu Duc", addressRegion:"Ho Chi Minh City", addressCountry:"Vietnam"
      }
    });
  }

  function injectExperience(){
    const el = document.getElementById('experience-list'); if(!el) return;
    const experiences = [
      {
        role: 'Senior DevOps — Confidential (HCMC/Thailand)',
        time: 'Dec 2022 – Present',
        bullets: [
          'Azure migration from AWS with minimal downtime',
          'CI/CD with Jenkins/GitLab CI; Helm + ArgoCD',
          'Integrated LLM/AI workloads and secured containers'
        ]
      },
      {
        role: 'Senior DevOps — Parcel Perform',
        time: 'Jul 2022 – Dec 2022',
        bullets: [
          'AWS infrastructure (EKS, RDS, MSK, S3, IAM)',
          'GitOps with GitLab CI; Terraform, Helm/Helmfile',
          'Improved pipelines and platform reliability'
        ]
      },
      {
        role: 'Senior DevOps — Home Credit',
        time: 'Jul 2021 – Jul 2022',
        bullets: [
          'Azure services (AKS, PostgreSQL, WAF)',
          'Strengthened CI/CD and deployment automation',
          'Kept HomeX core services stable and scalable'
        ]
      },
      {
        role: 'SRE/DevOps — VNG · ZaloPay',
        time: 'Jun 2020 – Jul 2021',
        bullets: [
          'Kubernetes ops (Ingress, Metallb, RBAC); TiDB/MySQL',
          'Jenkins scripted pipelines; incident response',
          'Ansible/Python/Golang automation'
        ]
      },
      {
        role: 'DevOps — TMA · Humana',
        time: 'Dec 2019 – Jun 2020',
        bullets: [
          'Azure Data Factory pipelines; Python automations',
          'Processed and stored client data at scale'
        ]
      },
      {
        role: 'DevOps — TMA · KBTG (Onsite Thailand)',
        time: 'Mar 2019 – Dec 2019',
        bullets: [
          'CI/CD for 100+ fintech projects; OpenShift/AWS',
          'Dockerized deployments; JFrog; Linux/Unix/Windows'
        ]
      },
      {
        role: 'DevOps — TMA · Velocix',
        time: 'Jul 2018 – Mar 2019',
        bullets: [
          'Kubernetes build pipelines; cloud migration',
          'Big Data stack: Hadoop, Kafka, Impala, Kudu'
        ]
      },
      {
        role: 'DevOps — TMA · Hoan Vu Lab',
        time: 'May 2018 – Jul 2018',
        bullets: [
          'CI for C/C#/C++; IoT/Linux build infra',
          'Packaged installers and deployed MariaDB'
        ]
      },
      {
        role: 'Sysadmin & PHP Dev — HDVnBits.org',
        time: 'May 2012 – Jul 2017',
        bullets: [
          'Maintained large P2P website (300k users total)',
          'PHP/Bootstrap, MySQL, backups, user management'
        ]
      },
      {
        role: 'Helpdesk — CTU e‑Library',
        time: 'Sep 2009 – Jul 2013',
        bullets: [
          'Supported Linux users; network and infra assistance'
        ]
      },
      {
        role: 'IT Support — Cara Cafe',
        time: 'Sep 2011 – May 2013',
        bullets: [
          'Designed networks; Samba/NFS file sharing; security'
        ]
      }
    ];

    el.innerHTML = experiences.map(exp => (
      `<li><div class="role">${exp.role}</div><div class="time">${exp.time}</div>`+
      (exp.bullets?.length ? `<ul class="bullets">${exp.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>` : '')+
      `</li>`
    )).join('');
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();


