import singletonCounter from './Counter.js'

singletonCounter.increment();
console.log(singletonCounter.getCount()); // 1