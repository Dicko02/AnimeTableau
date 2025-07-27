import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorModule } from  '@angular/material/paginator' ;
import { InterFace } from '../interface/Interface';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";



const database : InterFace [] = [
  {   Id: 1,
      MainCharacter: 'Rimuru Tempest',
      AnimeName: 'tensei shitara slime datta ken',
      AnimeSeason: 3,
      AnimeEpisodes: 72,
      AnimeImage: 'https://akibamarket.com/wp-content/uploads/2021/11/slime-636x900-1.jpg'},

  {   Id: 2,
      MainCharacter: 'Makoto Misumi',
      AnimeName: 'tsukimichi moonlit fantasy',
      AnimeSeason: 2,
      AnimeEpisodes: 37,
      AnimeImage: 'https://e0.pxfuel.com/wallpapers/344/472/desktop-wallpaper-tsukimichi-moonlit-fantasy-and-background.jpg'},

  {   Id: 3,
      MainCharacter: 'Rou',
      AnimeName: 'Re:Monster',
      AnimeSeason: 1,
      AnimeEpisodes: 12,
      AnimeImage: 'https://fr.web.img2.acsta.net/pictures/24/03/14/09/34/1185430.jpg'},

  {
    Id: 4,
    MainCharacter: 'Naruto & Sasuke',
    AnimeName: 'Naruto',
    AnimeSeason: 21,
    AnimeEpisodes: 720,
    AnimeImage: 'https://wallpapers.com/images/featured/naruto-and-sasuke-h97ej4vr891i4gc6.jpg'},

  {
    Id: 5,
    MainCharacter: 'Elric Brothers',
    AnimeName: 'fullmetal alchemist',
    AnimeSeason: 1,
    AnimeEpisodes: 64,
    AnimeImage: 'https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg'},

  {
    Id: 6,
    MainCharacter: 'Yûgi Muto',
    AnimeName: 'Yu-Gi-Oh!',
    AnimeSeason: 5,
    AnimeEpisodes: 224,
    AnimeImage: 'https://fond-ecran-manga.fr/wp-content/uploads/2021/05/Yu-gi-oh-X-Reader-I-love-you-x-Yami-450x675.jpg'},

  {
    Id: 7,
    MainCharacter: 'Sacha',
    AnimeName: 'Pokemon',
    AnimeSeason: 25,
    AnimeEpisodes: 1232,
    AnimeImage: 'https://media.gqmagazine.fr/photos/6421588f30211636249315f3/master/pass/PokemonCompany.png'},

  {
    Id: 8,
    MainCharacter: 'Monkey D. Luffy',
    AnimeName: 'One Piece',
    AnimeSeason: 21,
    AnimeEpisodes: 1108,
    AnimeImage: 'https://www.toei-animation.com/wp-content/uploads/2023/12/Egghead-KV_with-copyright-for-website-825x460.jpg'},

  {
    Id: 9,
    MainCharacter: 'Ichigo Kurosaki',
    AnimeName: 'Bleach',
    AnimeSeason: 17,
    AnimeEpisodes: 533,
    AnimeImage: 'https://fr.web.img6.acsta.net/pictures/19/07/19/14/52/5225691.jpg'}
];



@Component({
  selector: 'app-tableau',
  standalone: true,
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule
  ],
  templateUrl: './tableau.component.html',
  styleUrl: './tableau.component.scss'
})
export class TableauComponent{

  dataSource = new MatTableDataSource(database);//database;//service.getService();

  displayedColumns = ['Id', 'AnimeName', 'MainCharacter', 'AnimeSeason', 'AnimeEpisodes', 'AnimeImage'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
