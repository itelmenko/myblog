export default function(count) {

  function increment() {
    count.value++;
  }

  return {
    increment,
  }
}