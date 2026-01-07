import fs from 'fs';
import path from 'path';
import { InfoPage } from '@/components/InfoPage';

export default async function TermsPage() {
    const filePath = path.join(process.cwd(), 'src/content/spot/terms.md');
    const content = fs.readFileSync(filePath, 'utf8');

    return (
        <InfoPage
            title="Términos de Servicio"
            subtitle="Reglas básicas para anclar tus recuerdos."
            content={content}
            backHref="/spot"
        />
    );
}
