import { Categorie } from './Categorie';
import { Episode } from './Episode';
import { TypeMedia } from './TypeMedia';

export class Item {
    id: number;
    libelle: string;
    lien: string;
    categorie: Array<Categorie>;
    episode: Episode;
    typeMedia: TypeMedia;
}
