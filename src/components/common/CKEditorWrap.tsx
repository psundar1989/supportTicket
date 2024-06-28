'use client'
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "@ckeditor/ckeditor5-build-classic";

const CKEditorWrap =  () => {

    return (
        <CKEditor
            editor={Editor as any}
            data='<p>Support Ticket in Next.js!</p>'
            onReady={ editor => {
                // You can store the "editor" and use when it is needed.
                console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                console.log( { event, editor, data } );
            } }
            // onBlur={ ( event, editor ) => {
            //     console.log( 'Blur.', editor );
            // } }
            // onFocus={ ( event, editor ) => {
            //     console.log( 'Focus.', editor );
            // } }
        />
    )
}


export default CKEditorWrap;