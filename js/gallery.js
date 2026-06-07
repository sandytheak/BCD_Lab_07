const images = [
    {
        preview: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=480&q=80',
        original: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1280&q=80',
        description: 'Командний мозковий штурм та планування',
    },
    {
        preview: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=480&q=80',
        original: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=1280&q=80',
        description: 'Креативна ідея та інновації',
    },
    {
        preview: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=480&q=80',
        original: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1280&q=80',
        description: 'Дизайн мобільного інтерфейсу',
    },
    {
        preview: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=480&q=80',
        original: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1280&q=80',
        description: 'Сучасна кімната для переговорів',
    },
    {
        preview: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=480&q=80',
        original: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1280&q=80',
        description: 'Креативний простір та зона відпочинку',
    },
    {
        preview: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=480&q=80',
        original: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1280&q=80',
        description: 'Розробники в open-space офісі',
    },
    {
        preview: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=480&q=80',
        original: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1280&q=80',
        description: 'Написання коду на ноутбуці',
    },
    {
        preview: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=480&q=80',
        original: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1280&q=80',
        description: 'Планування архітектури на дошці',
    },
    {
        preview: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=480&q=80',
        original: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1280&q=80',
        description: 'Робоче місце програміста',
    },
    {
        preview: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=480&q=80',
        original: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1280&q=80',
        description: 'Синхронізація команди стартапу',
    }
];

// <img src="smiley.gif" alt="Smiley face" width="42" height="42" style="vertical-align:bottom">

const proceed_images = images.map(item => `
    <li class="gallery-item">
        <a class="gallery-link" href="${item.original}">
            <img
                class="gallery-image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
            />
        </a>
    </li>
    `).join('');

// find a container
const gallery_container  = document.querySelector(".gallery");

// insert into container
gallery_container.insertAdjacentHTML('beforeend', proceed_images);

// Додаємо слухача подій на весь контейнер галереї (ul)
gallery_container.addEventListener('click', (event) => {
  
    // Prohibit a standard behaviour
    event.preventDefault();

    // Check click on image (tag IMG)
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const large_image_url = event.target.dataset.source;

    console.log('Посилання на велике зображення:', large_image_url);

    const instance = basicLightbox.create(`
        <img src="${large_image_url}" width="800" height="600">
    `)

    instance.show()
});
