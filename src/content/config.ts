// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const blogCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        isDraft: z.boolean().optional(),
        title: z.string(),
        description :z.string().optional(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
        author: z.string().optional(),
        // オプションのフロントマター・プロパティ。非常に一般的です！
        footnote: z.string().optional(),
        // フロントマターでは、引用符で囲まずに書かれた日付はDateオブジェクトとして解釈されます。
        publishDate: z.date().optional()
    }),    

});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    'blog': blogCollection,
};