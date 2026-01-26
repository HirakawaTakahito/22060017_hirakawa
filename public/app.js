document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();

  const colors = [...document.querySelectorAll(".color-group input:checked")]
    .map(c => c.value);

  const tone = document.querySelector("input[name='tone']:checked")?.value;

  const item = {
    category: category.value,
    colors,
    tone,
    style: style.value,
    design: design.value,
    material: material.value,
    fit: fit.value,
    length: length.value,
    created: new Date().toISOString()
  };

  console.log(item);

  // Supabase送信 or localStorage
});
