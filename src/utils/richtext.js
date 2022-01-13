export const convertRichTextImage = (content) =>{

    return content.replace(/<(img).*?(\/>|<\/img>)/g, function (mats) {

        if (mats.indexOf('style') < 0) {

            return mats.replace(/<\s*img/, '<img style="max-width:100%;height:auto;"');

        } else {

            return mats.replace(/style=("|')/, 'style=$1max-width:100%;height:auto;')

        }

    });

}
