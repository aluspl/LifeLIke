import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs/index';
import Log from '../models/Log';
import Config from '../../../shared/models/Config';
import { RestService } from '../../../shared/services/rest.service';
import Page from '../../../shared/models/Page';
import { LoggerService } from '../../../core/services/logger.service';
import Photo from '../../photo/models/Photo';
import FileUpload from '../models/FileUpload';
import { environment } from '../../../../environments/environment';
import Video from '../../video/models/Video';


const CreatePost = environment.API + '/Api/Page';

const AllPost = environment.API + '/Api/Page/All';

const ConfigApi = environment.API + '/Api/Config';
const LogList = environment.API + '/Api/Log/List';
const ClearLogs = environment.API + '/Api/Log/Clear';

const PhotoApi = environment.API + '/Api/Photo';
const CreatePhotoApi = environment.API + '/Api/Photo/Create';
const CreateVideo = environment.API + '/Api/Video';


@Injectable()
export class AdminRestService {

  private static log(message: string) {
    console.log(message);
    // this.messageService.add('HeroService: ' + message);
  }



  createVideo(model: Video): Observable<string> {
    return this.http
      .post<string>(CreateVideo, model, RestService.httpOptions)
      .pipe(
        tap(_ => LoggerService.log(`create Video`)),
        catchError(RestService.handleError<string>())
      );
  }
  createPost(model: Page): Observable<string> {
    return this.http
      .post<string>(CreatePost, model, RestService.httpOptions)
      .pipe(
        tap(_ => LoggerService.log(`create Post`)),
        catchError(RestService.handleError<string>())
      );
  }
  createPhoto(file: FileUpload) {
    const formData: FormData = new FormData();
    formData.append(file.PhotoStream.name, file.PhotoStream);
    formData.append('Name', file.Name);
    formData.append('Camera', file.Camera);
    formData.append('City', file.City);
    formData.append('Tags', file.Tags);
    const req = new HttpRequest('POST', CreatePhotoApi, formData, {
      reportProgress: true
    });

    return this.http.request(req);
  }

  getVideos(): Observable<Video[]> {
    return this.http
      .get<Video[]>(CreateVideo)
      .pipe(
        tap(_ => LoggerService.log(`fetched Logs`)),
        catchError(RestService.handleError<Video[]>())
      );
  }


  getLogList(): Observable<Log[]> {
    return this.http
      .get<Log[]>(LogList)
      .pipe(
        tap(_ => LoggerService.log(`fetched Logs`)),
        catchError(RestService.handleError<Log[]>())
      );
  }


  getPhotos(): Observable<Photo[]> {
    return this.http
      .get<Photo[]>(PhotoApi, RestService.httpOptions)
      .pipe(
        tap(_ => LoggerService.log(`fetched Photos`))
      );
  }

  getPages(): Observable<Page[]> {
    return this.http
      .get<Page[]>(AllPost)
      .pipe(
        tap(_ => LoggerService.log(`fetched PAges`))
      );
  }

  getConfigs(): Observable<Config[]> {
    return this.http
      .get<Config[]>(ConfigApi)
      .pipe(
        tap(_ => LoggerService.log(`Get Configs`))
      );
  }

  ClearLogs(): Observable<any> {
    return this.http
      .post<any>(ClearLogs, RestService.httpOptions)
      .pipe(
        tap(_ => LoggerService.log(`clear Logs`))
      );
  }


  editPost(page: Page) {
    return this.http
      .put<string>(CreatePost, page)
      .pipe(
        tap(_ => LoggerService.log(`fetched Configs`)),
      );
  }
  editVideo(model: Video): any {
    return this.http
      .put<string>(CreateVideo, model)
      .pipe(
        tap(_ => LoggerService.log(`edited Video`)),
      );
  }
  editPhoto(photo: Photo) {
    return this.http
      .put<string>(PhotoApi, photo, RestService.httpOptions)
      .pipe(
        tap(_ => LoggerService.log(`Edit Photo`)),
      );
  }
  editConfig(config: Config) {
    return this.http
      .put<string>(ConfigApi, config, RestService.httpOptions)
      .pipe(
        tap(_ => LoggerService.log(`Edit Config`)),
      );
  }

  removePost(id: number) {
    const url = `${CreatePost}/${id}`;
    return this.http
      .delete(url, RestService.httpOptions)
      .pipe(
        tap(_ => LoggerService.log(`Remove Post`))
      );
  }
  removeVideo(Id: number): any {
    const url = `${CreateVideo}/${Id}`;
    return this.http
      .delete(url, RestService.httpOptions)
      .pipe(
        tap(_ => LoggerService.log(`Remove Video`))
      );
  }

  deletePhoto(id: string) {
    const url = `${PhotoApi}/${id}`;
    return this.http
      .delete(url, RestService.httpOptions)
      .pipe(
        tap(_ => LoggerService.log(`Delete Photo`))
      );
  }

  deleteConfig(id: number) {
    const url = `${ConfigApi}/${id}`;
    return this.http
      .delete(url, RestService.httpOptions)
      .pipe(
        tap(_ => LoggerService.log(`Delete Config`))
      );
  }

  constructor(private http: HttpClient) {
  }
}
