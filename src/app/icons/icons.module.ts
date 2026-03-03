import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatherModule } from 'angular-feather';
import {
  XCircle,
  User,
  Eye,
  EyeOff,
  AlertTriangle,
  ArrowLeft,
  Menu,
  PlusCircle,
  CheckCircle,
  X,
  Home,
  Users,
  FileText,
  LogOut,
  ShoppingBag,
  CreditCard,
  Archive,
  DollarSign,
  Book,
  MessageSquare,
  List,
  ArrowDownLeft,
  ArrowUpRight,
  Calendar,
  Bell,
  ChevronRight,
  Clock
} from 'angular-feather/icons';

const icons = {
  User,
  Eye,
  EyeOff,
  AlertTriangle,
  ArrowLeft,
  Menu,
  PlusCircle,
  CheckCircle,
  XCircle,
  X,
  Home,
  Users,
  FileText,
  LogOut,
  ShoppingBag,
  CreditCard,
  Archive,
  DollarSign,
  Book,
  MessageSquare,
  List,
  ArrowDownLeft,
  ArrowUpRight,
  Calendar,
  Bell,
  ChevronRight,
  Clock
};

@NgModule({
  declarations: [],
  imports: [CommonModule, FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
