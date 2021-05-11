export const withLoggerButton = button => {
  return {
    name: 'ExtendedButton',
    render(h) {
      const slots = Object.keys(this.$slots).map(key => this.$slots[key]);
      return h(
        button,
        {
          nativeOn: {
            click:() => {
              console.log('clicked')
            }
          }
        },
        slots
      );
    }
  }
}