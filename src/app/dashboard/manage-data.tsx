import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "~/components/ui/card";

import { getDocuments } from "./actions";
import { ImportData } from "./import-data";

export async function ManageData() {
    const documents = await getDocuments();

    console.log(documents?.data);
    return (
        <div className="max-w-screen-xl mx-auto grid pt-16">
            { /* <Button variant="secondary"><UploadIcon className="mr-2 h-4 w-4" /> Upload PDF</Button> */}
            <ImportData />

            <div className="grid grid-cols-2 gap-4 w-full">
                {
                    !documents.data ? <p>{documents.message}</p> : documents.data.map((doc) =>
                        <Card key={doc.id}>
                            <CardHeader>
                                <CardTitle>Source: {doc.source || "unknown"}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <pre className="max-h-24 overflow-auto w-full text-wrap">{doc.content}</pre>
                            </CardContent>
                        </Card>
                    )
                }
            </div>
        </div>
    );
}

