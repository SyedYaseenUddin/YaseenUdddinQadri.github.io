const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
  });

const firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]')
 firstScrollSpyEl.addEventListener('activate.bs.scrollspy', (event) => {
  console('done');
})