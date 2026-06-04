/* Phone Virtual Environment — shared JS helper */
(function () {
  'use strict';

  function buildPhoneEnv(container, opts) {
    /* opts: { device, label, src, allowSwipe } */
    const device = opts.device || 'iphone15';
    const label  = opts.label  || '';
    const src    = opts.src    || null;

    container.setAttribute('data-device', device);

    const chassis = document.createElement('div');
    chassis.className = 'phone-chassis';

    /* Notch */
    chassis.insertAdjacentHTML('beforeend',
      `<div class="phone-notch"><div class="phone-notch-pill"></div></div>`
    );

    /* Status bar */
    chassis.insertAdjacentHTML('beforeend', `
      <div class="phone-statusbar">
        <span class="phone-time">9:41</span>
        <div class="phone-notch" style="position:relative;width:0;height:0;"></div>
        <div class="phone-status-icons">
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <rect x="0" y="5" width="2" height="5" rx="1" fill="white" opacity="0.4"/>
            <rect x="3" y="3" width="2" height="7" rx="1" fill="white" opacity="0.6"/>
            <rect x="6" y="1" width="2" height="9" rx="1" fill="white" opacity="0.8"/>
            <rect x="9" y="0" width="2" height="10" rx="1" fill="white"/>
          </svg>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <path d="M8 2.5C10.5 2.5 12.7 3.5 14.2 5.1L15.5 3.7C13.6 1.7 11 0.5 8 0.5C5 0.5 2.4 1.7 0.5 3.7L1.8 5.1C3.3 3.5 5.5 2.5 8 2.5Z" fill="white" opacity="0.5"/>
            <path d="M8 5C9.7 5 11.2 5.7 12.3 6.8L13.6 5.4C12.1 3.9 10.1 3 8 3C5.9 3 3.9 3.9 2.4 5.4L3.7 6.8C4.8 5.7 6.3 5 8 5Z" fill="white" opacity="0.7"/>
            <path d="M8 7.5C9 7.5 9.9 7.9 10.5 8.6L11.8 7.2C10.8 6.1 9.5 5.5 8 5.5C6.5 5.5 5.2 6.1 4.2 7.2L5.5 8.6C6.1 7.9 7 7.5 8 7.5Z" fill="white" opacity="0.9"/>
            <circle cx="8" cy="11" r="1.5" fill="white"/>
          </svg>
          <svg width="26" height="12" viewBox="0 0 26 12" fill="none">
            <rect x="0.5" y="0.5" width="22" height="11" rx="3.5" stroke="white" stroke-opacity="0.35"/>
            <rect x="2" y="2" width="17" height="8" rx="2" fill="white"/>
            <path d="M24 4.5V7.5C24.8 7.2 25.5 6.5 25.5 6C25.5 5.5 24.8 4.8 24 4.5Z" fill="white" opacity="0.4"/>
          </svg>
        </div>
      </div>
    `);

    /* Screen */
    const screen = document.createElement('div');
    screen.className = 'phone-screen';
    if (src) {
      const iframe = document.createElement('iframe');
      iframe.src = src;
      iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
      screen.appendChild(iframe);
    }
    chassis.appendChild(screen);

    /* Home bar */
    chassis.insertAdjacentHTML('beforeend', '<div class="phone-home"></div>');

    container.appendChild(chassis);

    /* Live clock */
    const timeEl = chassis.querySelector('.phone-time');
    function tick() {
      const d = new Date();
      timeEl.textContent = d.getHours() + ':' + String(d.getMinutes()).padStart(2,'0');
    }
    tick();
    setInterval(tick, 30000);

    /* Touch ripple */
    screen.addEventListener('click', function(e) {
      const r = document.createElement('div');
      r.className = 'touch-ripple';
      r.style.left = e.offsetX + 'px';
      r.style.top  = e.offsetY + 'px';
      screen.appendChild(r);
      r.addEventListener('animationend', () => r.remove());
    });

    return { chassis, screen };
  }

  /* Device switcher */
  function attachDevicePicker(toolbar, envEl) {
    const devices = [
      { id:'iphone15', label:'iPhone 15' },
      { id:'pixel8',   label:'Pixel 8'   },
      { id:'galaxy',   label:'Galaxy S24'}
    ];
    devices.forEach(function(d) {
      const btn = document.createElement('button');
      btn.textContent = d.label;
      if (envEl.getAttribute('data-device') === d.id) btn.classList.add('active');
      btn.addEventListener('click', function() {
        envEl.setAttribute('data-device', d.id);
        toolbar.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
      toolbar.appendChild(btn);
    });

    /* Orientation */
    const rotBtn = document.createElement('button');
    rotBtn.textContent = '⟳ Rotate';
    rotBtn.addEventListener('click', function() {
      envEl.classList.toggle('landscape');
    });
    toolbar.appendChild(rotBtn);
  }

  window.PhoneShell = { buildPhoneEnv, attachDevicePicker };
})();
