export default function(count) {

  function decrement() {
    count.value--;
  }

  return {
    decrement,
  }
}