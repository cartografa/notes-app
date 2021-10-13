/** @jsxImportSource theme-ui */
import { useRouter } from 'next/router';
import Link from 'next/link';

export default () => {
    const router = useRouter();
    // tiene que ser el mismo que el nombre del archivo:
    const { id } = router.query;

    return (
        <div sx={{ variant: 'containers.page' }}>
            <h1>Note: {id}</h1>
        </div>
    );
};