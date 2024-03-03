// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from "@generouted/react-router/client";

export type Path =
  | `/`
  | `/aboutus`
  | `/contact`
  | `/event`
  | `/event-detail/:id/:tab?`
  | `/event/:tab`
  | `/projects`
  | `/projects/:id`
  | `/service`;

export type Params = {
  "/event-detail/:id/:tab?": { id: string; tab?: string };
  "/event/:tab": { tab: string };
  "/projects/:id": { id: string };
};

export type ModalPath = `/event-detail/[id]/checkout`;

export const { Link, Navigate } = components<Path, Params>();
export const { useModals, useNavigate, useParams } = hooks<
  Path,
  Params,
  ModalPath
>();
export const { redirect } = utils<Path, Params>();
