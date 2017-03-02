import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Page1 from '@/components/Page1'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Page1',
      name: 'Page1',
      component: Page1
    }
    
  ]
})
export default router

router.afterEach((to, from) => {
  Pyze.postPageView(to.name, to.path);
})

var pyzeAppKey="YOUR_PYZE_APP_KEY";!function(e,t){function n(e,t){function n(t){e[t]=function(){e._q.push([t].concat(Array.prototype.slice.call(arguments,0)))}}for(var s=0;s<t.length;s++)n(t[s])}var s=e.Pyze||{_q:[]},i=e.PyzeEvents||{_q:[]},p=e.PyzeCuratedEvents||{_q:[]},o=["initialize","getTimerReference","postWebAppVersion","postPageView"],c=["postCustomEvent","postCustomEventWithAttributes","postTimedEvent","postExplicitActivation"],r=["post"];n(s,o),n(i,c),n(p,r);var a=t.createElement("script"),y=t.getElementsByTagName("script")[0];a.type="text/javascript",a.async=!0,a.src="https://cdn.pyze.com/pyze.js",y.parentNode.insertBefore(a,y),e.Pyze=s,e.PyzeEvents=i,e.PyzeCuratedEvents=p}(window,document),Pyze.initialize(pyzeAppKey);

