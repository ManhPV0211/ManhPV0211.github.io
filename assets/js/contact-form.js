document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.php-email-form');
    const loading = form.querySelector('.loading');
    const errorMsg = form.querySelector('.error-message');
    const sentMsg = form.querySelector('.sent-message');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Ngăn form reload trang
  
      // Ẩn/hiện trạng thái
      loading.style.display = 'block';
      errorMsg.style.display = 'none';
      sentMsg.style.display = 'none';
  
      const formData = new FormData(form);
  
      fetch(form.getAttribute('action'), {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.text();
      })
      .then(data => {
        if (data.trim() === 'OK' || data.includes('Message sent')) {
          loading.style.display = 'none';
          sentMsg.style.display = 'block';
          form.reset();
        } else {
          throw new Error(data);
        }
      })
      .catch(error => {
        loading.style.display = 'none';
        errorMsg.innerHTML = error.message;
        errorMsg.style.display = 'block';
      });
    });
  });
  