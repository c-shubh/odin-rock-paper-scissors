/** @type {import('vite').UserConfig} */
export default {
  /* By default Vite uses the base as '/'

     But when hosting on github.io this site lives under 
     {username}.github.io/{project-name}/
     due to which the absolute urls break

     The below option makes the urls relative
  */
  base: ''
};
