// 1. Làm sáng mục menu tương ứng với phần đang xem
const links = [...document.querySelectorAll('.nav ul a')];
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

if ('IntersectionObserver' in window) {
  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => spy.observe(s));
}

// 2. Thanh kỹ năng chạy ra khi cuộn tới
const skills = document.getElementById('ky-nang');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  io.observe(skills);
} else {
  skills.classList.add('in-view');
}

// 3. Tự cập nhật năm ở chân trang
document.getElementById('year').textContent = new Date().getFullYear();
