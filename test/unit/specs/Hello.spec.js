import Vue from 'vue'
import Hello from '@/components/Hello'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    vm.hits= [
            {
               
                "_source": {
                    "branchid": 1,
                    "branchname": "New york"
                }
            }]
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to HTML5')
        expect(vm.$el.querySelector('.hello h2').textContent)
      .to.equal('Building smart applications')
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.hello tr').length)
        .to.equal(2);
      // Since we're doing this asynchronously, we need to call done() to tell Mocha that we've finished the test.
      done();
    });

    
  
  })
})
