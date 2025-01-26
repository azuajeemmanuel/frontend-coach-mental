import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';
import { PaginatorModule } from 'primeng/paginator';
import { CarouselModule } from 'primeng/carousel';
import { TabMenuModule } from 'primeng/tabmenu';
import { StyleClassModule } from 'primeng/styleclass';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MessagesModule } from 'primeng/messages';
import { AvatarModule } from 'primeng/avatar';
import { MegaMenuModule } from 'primeng/megamenu';
import { BadgeModule } from 'primeng/badge';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { PanelMenuModule } from 'primeng/panelmenu';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { TagModule } from 'primeng/tag';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ImageModule } from 'primeng/image';
import { TreeSelectModule } from 'primeng/treeselect';
import { PasswordModule } from 'primeng/password';
import { InputMaskModule } from 'primeng/inputmask';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DividerModule } from 'primeng/divider';
import { InputNumberModule } from 'primeng/inputnumber';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MultiSelectModule } from 'primeng/multiselect';
import { SpeedDialModule } from 'primeng/speeddial';
import { SkeletonModule } from 'primeng/skeleton';
import { RatingModule } from 'primeng/rating';
@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    // Agrega otros módulos de componentes aquí
  ],
  exports: [
    AvatarModule,
    AutoCompleteModule,
    BadgeModule,
    ButtonModule,
    BreadcrumbModule,
    CardModule,   
    CalendarModule,
    CarouselModule,
    CommonModule,
    ConfirmDialogModule,
    DialogModule,
    DividerModule,
    DropdownModule,
    FormsModule,
    FloatLabelModule,
    FileUploadModule,
    PanelMenuModule,
    MessagesModule,
    MegaMenuModule,
    MenubarModule,   
    MenuModule,
    MessageModule,
    MultiSelectModule,
    PaginatorModule,
    PasswordModule,
    PanelModule,
    TagModule,
    TabViewModule,
    ToolbarModule,
    TabMenuModule,
    TableModule,
    TreeSelectModule,
    ToastModule,
    StyleClassModule,
    SpeedDialModule,
    SkeletonModule,
    InputIconModule,
    InputNumberModule,
    IconFieldModule,
    ImageModule,
    InputSwitchModule,
    InputTextModule,
    InputMaskModule,
    RadioButtonModule,
    RippleModule,
    RatingModule
    // Exporta los módulos para que puedan ser utilizados en otros lugares
  ],
})
export class PrimengModule {}
