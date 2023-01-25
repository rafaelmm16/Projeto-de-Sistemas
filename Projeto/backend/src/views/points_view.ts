import Points from '../models/Points';
import imagesView from './images_view';

export default {
  render(points: Points) {
    return {
      id: points.id,
      name: points.name,
      latitude: points.latitude,
      longitude: points.longitude,
      about: points.about,
      instructions: points.instructions,
      opening_hours: points.opening_hours,
      open_on_weekends: points.open_on_weekends,
      images: imagesView.renderMany(points.images)
    }
  },

  renderMany(points: Points[]) {
    return points.map(points => this.render(points))
  },
};