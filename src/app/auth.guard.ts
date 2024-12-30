import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = sessionStorage.getItem("token");

  if (token) {
    return true;
  } else {
    inject(Router).navigate(["/login"])
    return false;
  }
};
