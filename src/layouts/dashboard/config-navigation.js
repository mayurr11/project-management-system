import { useMemo } from 'react';
// routes
import { paths } from 'src/routes/paths';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const data = useMemo(
    () => [
      // OVERVIEW
      // ----------------------------------------------------------------------
      {
        subheader: 'overview v5.3.0',
        items: [
          { title: 'Dashboard', path: paths.dashboard.root, icon: ICONS.dashboard },
          { title: 'Tasks', path: paths.dashboard.two, icon: ICONS.ecommerce },
          {
            title: 'Project Description',
            path: paths.dashboard.three,
            icon: ICONS.analytics,
          },
          { title: 'List', path: paths.dashboard.nine, icon: ICONS.ecommerce },
          { title: 'Budget Tracker', path: paths.dashboard.ten, icon: ICONS.ecommerce },

        ],
      },

      // MANAGEMENT
      // ----------------------------------------------------------------------
      {
        subheader: 'management',
        items: [
          {
            title: 'user',
            path: paths.dashboard.group.root,
            icon: ICONS.user,
            children: [
              { title: 'Users', path: paths.dashboard.group.root },
              { title: 'Edit User', path: paths.dashboard.group.five },
              { title: 'Create User', path: paths.dashboard.group.six },
              { title: 'Profile', path: paths.dashboard.group.seven },
              { title: 'Cards', path: paths.dashboard.group.eight },

            ],
          },
        ],
      },
    ],
    []
  );

  return data;
}
