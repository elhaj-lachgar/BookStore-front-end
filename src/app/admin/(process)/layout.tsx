

import LayoutHandler from "@/components/LayoutHandler"




function AdminLayout ( { children } : { children : React.ReactNode }) {

    return (
        <html lang="en">
            <body>
                <LayoutHandler>
                    {children}
                </LayoutHandler>
            </body>
        </html>
    )
}

export default AdminLayout ;