export default class ProteinTranslation {
    public static proteins(rna: string) {
        const orginalRna = rna
        const protein: string[] = []
        let codon: string
        while (rna) {
            codon = rna.slice(0, 3)
            switch (codon) {
                case 'AUG':
                    protein.push('Methionine')
                    break

                case 'UUU':
                case 'UUC':
                    protein.push('Phenylalanine')
                    break

                case 'UUA':
                case 'UUG':
                    protein.push('Leucine')
                    break

                case 'UCU':
                case 'UCC':
                case 'UCA':
                case 'UCG':
                    protein.push('Serine')
                    break

                case 'UAU':
                case 'UAC':
                    protein.push('Tyrosine')
                    break

                case 'UGU':
                case 'UGC':
                    protein.push('Cysteine')
                    break

                case 'UGG':
                    protein.push('Tryptophan')
                    break

                case 'UAA':
                case 'UAG':
                case 'UGA':
                    rna = ''
                    break

                default:
                    throw `Invalid RNA '${orginalRna}', codon '${codon}' is invalid.`
            }
            rna = rna.slice(3)
        }
        return protein
    }
}
